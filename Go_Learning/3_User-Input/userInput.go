package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {

	// Method - 1
	fmt.Println("method 1")
	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Rate our Pizza")

	//Comma Ok // err ok
	input, _ := reader.ReadString('\n')
	fmt.Println("Typed", input)
	fmt.Printf("The Type of input is : %T", input)
	fmt.Println(" ")
	// Method - 2
	fmt.Println("method 2")
	var name string
	fmt.Scanln(&name)
	fmt.Println("The entered text is : ", name)
	fmt.Printf("The Type of input is : %T", name)
}
