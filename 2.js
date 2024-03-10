const params = new URLSearchParams(window.location.search);
const title = params.get('title');
const overview = params.get('overview');
const releaseDate = params.get('release_date');
const image=params.get("poster_path");
const ratings=params.get("vote_average");
const lang=params.get("original_language")
const baseImageUrl = "https://image.tmdb.org/t/p/w500";
const actors=params.get("actors");
const Writer=params.get("Writer");


const lan = {
    "hi": "Hindi",
    "en": "English",
    "es": "Spanish",
    "fr": "French",
    "de": "German",
    "it": "Italian",
    "pt": "Portuguese",
    "zh": "Chinese",
    "ja": "Japanese",
    "ko": "Korean",
    "ru": "Russian",
    
  };
  const language=lan[lang];

const gen = {
    // Existing genres
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
    10762: "Kids",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics",
    10769: "Foreign",
    10771: "Adult",
    10774: "Game Show",
    10775: "Home & Garden",
    10776: "Crime & Mystery",
    10777: "Science & Nature",
    10778: "Action & Adventure",
    10779: "Reality & Game Shows",
    10780: "Sci-Fi & Fantasy",
    10781: "Talk",
    10782: "War & Politics",
    10783: "Western",
    10784: "Kids",
    10786: "News",
    10787: "Reality",
    10788: "Soap",
    10789: "Talk",
    10790: "War & Politics",
    // Additional genres
    10791: "Food",
    10792: "Competition",
    10793: "Fashion",
    10794: "Travel",
    10795: "Technology",
    10796: "Lifestyle",
    10797: "Health",
    10798: "Music & Dance",
    10799: "Art & Design",
    10800: "Education",
    10801: "Pets & Animals",
    10802: "Spirituality",
    10803: "Sports",
    10804: "Fitness",
    // Additional genres
    10759: "Action & Adventure",
    10765: "Sci-Fi & Fantasy",
    // Add more genres here...
};






// const genid1=params.get("genre_ids[0]");
// const genid2=params.get("genre_ids[1]");

// const gen1=gen[genid1];
// const gen2=gen[genid2];


// document.getElementById('title').innerText = decodeURIComponent(title);
// document.getElementById('date').innerText = decodeURIComponent(releaseDate);

// document.getElementById('poster').src=baseImageUrl+decodeURIComponent(image);
// document.getElementById('des').innerText = decodeURIComponent(overview);
// document.getElementById('rate').innerText = "Ratings :"+ parseFloat(decodeURIComponent(ratings)).toFixed(1);

// document.getElementById('genre1').innerText = decodeURIComponent(gen1);
// document.getElementById('genre2').innerText = decodeURIComponent(gen2);

// document.getElementById('lang').innerText=" Original Language:"+decodeURIComponent(language);
// document.getElementById('actor').innerText = "Actors :  "+decodeURIComponent(actors);
// document.getElementById('writer').innerText = "Writers : "+decodeURIComponent(Writer);



try {
  document.getElementById('title').innerText = decodeURIComponent(title);
  document.getElementById('date').innerText = decodeURIComponent(releaseDate);
  document.getElementById('poster').src = baseImageUrl + decodeURIComponent(image);
  document.getElementById('des').innerText = decodeURIComponent(overview);
  document.getElementById('rate').innerText = "Ratings: " + parseFloat(decodeURIComponent(ratings)).toFixed(1);
  document.getElementById('genre1').innerText = decodeURIComponent(genre1);
  document.getElementById('genre2').innerText = decodeURIComponent(genre2);
  document.getElementById('lang').innerText = "Original Language: " + decodeURIComponent(language);
  document.getElementById('actor').innerText = "Actors: " + decodeURIComponent(actors);
  document.getElementById('writer').innerText = "Writers: " + decodeURIComponent(Writer);
} catch (error) {
  console.error('Error:', error);
  // Display error message on screen
  alert(' Network Error occurred while loading data. Please try again later.');
}
