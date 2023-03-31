import Grid from "@mui/material/Grid";
import { MusicPlay } from "../components/musicPlay";
import { SideBar } from "../components/sideBar";

export const Content = () => {
  return <div>alou</div>;
};

export const HomePage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "minmax(200px, auto) 1fr",
        gridTemplateRows: "1fr auto",
        gridTemplateAreas: `
        "sidebar content"
        "sidebar musicplay"
      `,
      }}
    >
      <div
        style={{
          gridArea: "sidebar",
          height: "100%",
        }}
      >
        <SideBar />
      </div>

      <div
        style={{
          gridArea: "musicplay",
          width: "100%",
        }}
      >
        <MusicPlay />
      </div>

      <div
        style={{
          gridArea: "content",
          width: "100%",
          backgroundColor: "blue",
        }}
      >
        <Content />
      </div>
    </div>
  );
};

// const [categories, setCategories] = useState<any>([]);

//   const handleArtist = async () => {
//     try {
//       const response = await SpotifyCategoryService.getCategories();
//       console.log(response.data);

//       setCategories(response.data.categories.items);
//       // return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   };

// <button onClick={handleArtist}>ver...</button>
//       {categories.map((category: any) => (
//         <div key={category.id}>
//           <h1>{category.name}</h1>
//           <img src={category.icons[0].url} alt={category.name} />
//         </div>
//       ))}
