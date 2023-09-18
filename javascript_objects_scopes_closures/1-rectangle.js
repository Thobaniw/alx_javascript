class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  }
  
  const r1 = new Rectangle(3, 3);
  console.log(r1); // Output: Rectangle { width: 3, height: 3 }
  console.log(r1.width); // Output: 3
  console.log(r1.height); // Output: 3
  
  const r2 = new Rectangle(3, -3);
  console.log(r2); // Output: Rectangle { width: 3, height: -3 }
  console.log(r2.width); // Output: 3
  console.log(r2.height); // Output: -3
  
  const r3 = new Rectangle(3);
  console.log(r3); // Output: Rectangle { width: 3, height: undefined }
  console.log(r3.width); // Output: 3
  console.log(r3.height); // Output: undefined
  
  const r4 = new Rectangle(undefined, 3);
  console.log(r4); // Output: Rectangle { width: undefined, height: 3 }
  console.log(r4.width); // Output: undefined
  console.log(r4.height); // Output: 3
  
  const r5 = new Rectangle();
  console.log(r5); // Output: Rectangle { width: undefined, height: undefined }
  console.log(r5.width); // Output: undefined
  console.log(r5.height); // Output: undefined
  