// export const data = [
//   {
//     id: 1,
//     body: `### This just in!

//         Markdown is an *awesome* way to write **very basic HTML** by typing manually

//         It can be used for:

//         1. README files
//         1. Slack and Discord messages
//         1. **So much more!**

//         ---

//         Here's a division 👆`,
//   },
//   { id: 2, body: `a` },
//   { id: 3, body: `b` },
//   { id: 4, body: `c` },
//   { id: 5, body: `d` },
//   { id: 6, body: `e` },
// ];



export function getData(){
    return JSON.parse(localStorage.getItem("Notes"));
}
export function storeData(data){
    localStorage.setItem('Notes', JSON.stringify(data));
}
export function addNewNote(id){
    let data=[]
    if(localStorage.getItem("Notes")){
        data=JSON.parse(localStorage.getItem("Notes"))
        data.unshift({ id: id, body: `New Item` })
    }
    storeData(data);
}
export function updateDataItem(item, body) {
    let data=getData()
    const itemIndex = data.findIndex((element) => element.id === item.id);
  
    if (itemIndex !== -1) {
        data[itemIndex].body = body;
  
      const updatedItem = data.splice(itemIndex, 1)[0];
      data.unshift(updatedItem);
    }
    storeData(data)
};
export function deleteNote(id){
    console.log("Delete "+id)
    let data = getData().filter((item) => item.id !== id);
    storeData(data);
}



