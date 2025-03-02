//8 Kyu
//Volume of a Cuboid
//Fundamentals, geometry, mathematics

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.



//Solution I

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    //multiply the length, width, and height to calculate the volume of the cuboid.
    let volume = length * width * height
    //then return it
    return volume
  }
}


//Parameters
//take in three params , nums-> integer dimension of a cube.

//return
// num-> that is the volume of a cube = length * width * height

//examples
//console.log(getVolumeOfCuboid(2,2,2) 8)
//console.log(getVolumeOfCuboid(2,1,3) 6)

