export const cleanMuseumData = (data) => {
  const array = data.artObjects;
  return array.map((d) => {
    // const sizeScaleValue = (d) => sizeScale(sizeValue(d));
    // const colorScaleValue = (d) => colorScale(colorValue(d));
    // console.log(colorScaleValue);
    return {
      id: d.objectNumber,
      title: d.title,
      name: d.name,
      headerImage: d.headerImage,
      productionPlaces: d.productionPlaces,
      links: d.links,
      longTitle: d.longTitle,
      webImage: d.webImage,
      principalOrFirstMaker: d.principalOrFirstMaker,

      // sizeScale: sizeScaleValue,
      // colorScale: colorScaleValue,
    };
  });
};

export const cleanMuseumDataID = (data) => {

  const d = data.artObject;
  // const keys = Object.keys(data.artObject)

  // const sizeScaleValue = (d) => sizeScale(sizeValue(d));
  // const colorScaleValue = (d) => colorScale(colorValue(d));
  // console.log(colorScaleValue);
  return {
    id: d.objectNumber,
    title: d.title,
    titles: d.titles,
    materials: d.materials,
    description: d.description,
    productionPlaces: d.productionPlaces,
    longTitle: d.longTitle,
    webImage: d.webImage,
    principalOrFirstMaker: d.principalOrFirstMaker,
    physicalMedium: d.physicalMedium,
    subTitle: d.subTitle,
    plaqueDescription: d.plaqueDescription,
    principalMaker: d.principalMaker,
    location: d.location,
  };
};
