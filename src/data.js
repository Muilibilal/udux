import * as Images from "../src/assets/svgs/index";
import * as Singers from "../src/assets/images/index";

export const NavData = [
  {
    name: "Home",
    images: [Images.HomeIcon],
  },
  {
    name: "Discover",
    images: [Images.DiscoverIcon],
  },
  {
    name: "Your Library",
    images: [Images.LibraryIcon],
  },
  {
    name: "Liked Songs",
    images: [Images.LikedIcon, Images.SoundIcon],
  },
  {
    name: "Recently Played",
    images: [Images.AudioIcon],
  },
  {
    name: "Create Playlist",
    images: [Images.PlaylistIcon],
  },
  {
    name: "My Playlist",
    images: [Images.RecordsIcon, Images.SearchIcon],
    lists: [
      "Riffs & Runs",
      "African Heat",
      "Gidi Nights",
      "Running out of Playlist name",
      "Saturday was a Good Day",
      "Riffs & Runs",
      "African Heat",
      "Gidi Nights",
      "Running out of Playlist name",
      "Riffs & Runs",
      "African Heat",
      "Saturday was a Good Day",
      "Running out of Playlist name",
    ],
  },
];

export const playlistData = [
  {
    title: "Daily Vibes 1",
    info: "Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... ",
    image: Singers.BurnaBoyImage,
  },
  {
    title: "Daily Vibes 2",
    info: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....  ",
    image: Singers.LojayImage,
  },
  {
    title: "Daily Vibes 3",
    info: "Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy ",
    image: Singers.KoffeeImage,
  },
  {
    title: "Daily Vibes 1",
    info: "Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... ",
    image: Singers.BurnaBoyImage,
  },
  {
    title: "Daily Vibes 3",
    info: "Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy ",
    image: Singers.KoffeeImage,
  },
  {
    title: "Daily Vibes 1",
    info: "Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... ",
    image: Singers.BurnaBoyImage,
  },
  {
    title: "Daily Vibes 2",
    info: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....  ",
    image: Singers.LojayImage,
  },
  {
    title: "Daily Vibes 3",
    info: "Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy ",
    image: Singers.KoffeeImage,
  },
];

export default function formatText(text, len) {
  return text.split(" ").length > len
    ? `${text.split(" ").slice(0, len).join(" ")}...`
    : text;
}
