package main

import "fmt"

func main() {
	age := 0
	if age >= 18 {
		fmt.Println("Votable")
	} else {
		fmt.Println("cannot Vote")
	}

	secondAge := 16
	if secondAge > 16 {
		fmt.Println("Age is small")
	} else if secondAge == 16 {
		fmt.Println(" Age is 16 ")
	} else {
		fmt.Println("Dont  know")
	}

	// Type of Variable
	fmt.Printf("The type of variable AGE is :  %T ", age)

}
