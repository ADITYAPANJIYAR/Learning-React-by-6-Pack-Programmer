import React from 'react'

// const MyHeading = (props) => {
// after destructruing we can write above line as
const MyHeading = ({name,text,price}) => {
  const a=232;

const obj={
  abb:12,
  ccd:2323,
};
alert(price);
//This is destructruing
const{abb, ccd}=obj

  // const b=props.text;
  return (
    <>
    <h1>{name}</h1>
    <MyHeadingLittle value={price} />
    {/* <div>{b}</div> */}
    <div>{text}</div>
    <div>MyHeading</div>
    <h1>adsa{a}</h1>
    <MyHeadingLittle />
    {/* <footer>{obj.abb}</footer> */}
    {/* after destructruing */}
    <footer>{ccd}</footer>

    </>
  )
}

// ek component me ek se jayada bhi component bana sakte hai
const MyHeadingLittle=({value}) =><h4>{value}</h4>;
const MyHeadingLittle2=() =><h4>My Little Heading2</h4>;
const MyHeadingLittle3=() =><h4>My Little Heading3</h4>;

export default MyHeading 
//export deafault kisi ek ko hi kar sakte hai...
//But curly braket laga ka r ek se jayda bhi export kar sakte hai...
export{MyHeadingLittle, MyHeadingLittle2,MyHeadingLittle3};

//or ye bhi likh kar export kar sakte hai
// export const MyHeadingLittle=() =><h4>My Little Heading</h4>;
// export const MyHeadingLittle2=() =><h4>My Little Heading2</h4>;
// export const MyHeadingLittle3=() =><h4>My Little Heading3</h4>;
