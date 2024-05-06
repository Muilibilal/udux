function NavImageComponent({ index, images }) {
  return images.map(
    (ImageComponent, i) =>
      images[index] == ImageComponent && <ImageComponent key={i} />
  );
}

export default NavImageComponent;
