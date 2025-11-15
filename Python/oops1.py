# class - Blueprint
# object - Instance of a class

class Computer:
    #Attributes -> Variables;
    #Methods -> Functions;

    def __init__(self):
        print("in init")

    def config(self):
        print("i9 Cpu")

comp1 = Computer();
Computer.config(comp1);
comp1.config();


