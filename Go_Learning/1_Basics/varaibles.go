package main

import "fmt"

func main() {
	var name string = "Rohit"
	fmt.Println(name)

	var language = "Golang" //Type infer from the data.
	fmt.Println(language)

	var age int = 31
	fmt.Println(age)

	//Shorhand
	name2 := "JavaScript" // Declare + Assign
	fmt.Println(name2)

	// Declare first and then Assign
	var food string
	food = "Biriyani"

	fmt.Println(food)

}
