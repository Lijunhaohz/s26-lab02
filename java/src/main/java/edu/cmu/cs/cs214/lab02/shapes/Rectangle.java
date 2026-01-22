package edu.cmu.cs.cs214.lab02.shapes;

public class Rectangle implements Shape {
    public final double height;
    public final double width;
    
    public Rectangle(double height, double width){
        this.height = height;
        this.width = width;
    }

    @Override
    public double getArea() {
        return height * width;
    }
}
