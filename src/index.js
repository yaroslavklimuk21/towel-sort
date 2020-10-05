
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if ( matrix == null){
    matrix = [];
    return matrix;
  }else if (matrix.length == 0){
    matrix = [];
    return matrix;
  }else {
    matrix.forEach((current, index) => { if(index % 2 !== 0){ current.sort((a, b) => {return (b - a);});}} );
    return matrix.flat();
  }
};
