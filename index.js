class Formatter {
  //add static methods here
  static capitalize(a){
     if (typeof a !== 'string') return ''
    return a.charAt(0).toUpperCase() + a.slice(1)
  }
   static sanitize(b){
    
     const chars = []
    b.split('').forEach((char) => {
      if (!['@', '#', '!', '$', '%', '^', '{', '}', '*', '(', ')'].includes(char) || ["'"].includes(char)) {
        chars.push(char)
      }
    })
   static titleize(){
    
  }
}