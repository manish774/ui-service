import {fetchUsersProps} from './ticketsNewModel';import {fetchUsersNewProps} from './ticketsNewModel';import {fetchUsers2Props} from './ticketsNewModel';


    export const  fetchUsers = async (props:fetchUsersProps) =>{
           const fetchData = await fetch(`https://api.github.com/users/${props?.name}/$${props?.userId}`,{
                method:'POST',
                body: JSON.stringify(props)
            })
          const data = await fetchData.json()
          return data;
}


    export const  fetchUsersNew = async (props:fetchUsersNewProps) =>{
           const fetchData = await fetch(`https://api.github.com/users/user`,{
                method:'POST',
                body: JSON.stringify(props)
            })
          const data = await fetchData.json()
          return data;
}


    export const  fetchUsers2 = async (props:fetchUsers2Props) =>{
           const fetchData = await fetch(`https://api.github.com/users/${props?.name}/$${props?.userId}`,{
                method:'POST',
                body: JSON.stringify(props)
            })
          const data = await fetchData.json()
          return data;
}const data = await fetchData.json()
          return data;
}


    export const  fetchUsers1 = async (props:fetchUsers1Props) =>{
           const fetchData = await fetch(`https://api.github.com/users/${props?.name}/$${props?.userId}`,{
                method:'POST',
                body: JSON.stringify(props)
            })
          const data = await fetchData.json()
          return data;
}


    export const  myGetQuery = async ()  =>{
           const fetchData = await fetch(`gacebook.com`)
          const data = await fetchData.json()
          return data;
}