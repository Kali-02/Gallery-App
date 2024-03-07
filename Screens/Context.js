import { createContext } from "react";


const UserContext = createContext({
    data:{},
    setData:()=>{},
    iconVisible:{},
    setIconVisible:()=>{},
    photos:{},
    setPhotos:()=>{},
    newAlbum:{},
    setNewAlbum:()=>{},
    photo:{},
    setPhoto:()=>{},
    fav:{},
    setFav:()=>{},
    albumdata:{},
    setAlbumData:()=>{},
    deleted:{},
    setDeleted:()=>{},
    archived:{},
    setArchived:()=>{},
    hidden:{},
    setHidden:()=>{},



})
export default UserContext