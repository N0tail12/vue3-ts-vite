export const 
  itunesSearch = async (search: string) => {
    await fetch(
      `https://itunes.apple.com/search?term=${search}&entity=album`
    ).then((val) => {
      return val.json();
    })
  }
;
