package main

import "fmt"

func main() {
	// const language = "Golang"
	// language = "Javascript" // This is error because we are reassigning Constant which is not allowed

	//Shorthand is not allowed out of function

	// Constants Grouping
	const (
		PORT = 3000
		HOST = "localhost"
	)

	fmt.Println(PORT)
	fmt.Println(HOST)

}
