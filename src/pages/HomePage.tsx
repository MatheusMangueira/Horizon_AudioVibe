import { useState } from "react";
import { SpotifyCategoryService } from "../services/api/spotifyCategoryService";

export const HomePage = () => {
  const [categories, setCategories] = useState<any>([]);

  const handleArtist = async () => {
    try {
      const response = await SpotifyCategoryService.getCategories();
      console.log(response.data);

      setCategories(response.data.categories.items);
      // return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleArtist}>ver...</button>
      {categories.map((category: any) => (
        <div key={category.id}>
          <h1>{category.name}</h1>
          <img src={category.icons[0].url} alt={category.name} />
        </div>
      ))}
    </div>
  );
};
