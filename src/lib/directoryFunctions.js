import { gallaryDir } from "./gallaryDir";

export function getAllCatIds() {
    
    return gallaryDir.map((cat) => {
      return {
        params: {
          cat: cat.id,
        },
      };
    });
}

export function getCat(catName) {

    let catIndex = '';

    gallaryDir.forEach((cat, index)=>{
        if (cat.id == catName) {
            catIndex=index;
        }
    })

    return catIndex;
}






