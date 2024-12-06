let library={
    Name:"Gyan Bhandar",
    Location:"Ujjain",
    Books:[
      {
        Title:"Ramayan",
        Author:"Maharshi Valmiki",
        Available:true,
      },
      {
        Title:"Mahabharat",
        Author:"Ved Vyas",
        Available:true,
      },
      {
        Title:"The Subtle Art of Not Giving A F*ck",
        Author:"Mark Manson",
        Available:false,
      },
    ]
  }
  library.Books.push({
    Title:"Change Your View",
    Author:"Lakshmi Sagar G",
    Available:true,
  })
  for(let i=0;i<library.Books.length;i++)
    {if(library.Books[i].Available==true)
      {console.log(`Title:${library.Books[i].Title} 
      Author:${library.Books[i].Author}`)
    }
    }
    