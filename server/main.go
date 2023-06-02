package main

import (
	routes "dewetour/Routes"
	"dewetour/migration"
	"dewetour/pkg/mysql"
	"fmt"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)


func main() {
	mysql.AutoMigrate()
	migration.RunAutoMigrate()
	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{"GET", "PATCH", "POST", "DELETE"},
		AllowHeaders: []string{"x-Requested-width", "Content-Type", "Authorization"},
	}))

	routes.RouteInit(r.Group("/api/v1"))

	r.Static("/uploads", "./uploads")

	fmt.Println("Server Started")
	http.ListenAndServe("localhost:5000", r)
}
