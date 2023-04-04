export default function About({ imgSrc, text }) {
  return (
    <div className="about flex py-16 mb-16 bg-neutral-50 px-28 text-slate-700">
      <div
        id="aboutImageWrapper"
        className="min-h-min w-2/5 rounded-xl overflow-hidden"
      >
        <img src={imgSrc} alt="about" />
      </div>

      <div id="aboutTextWrapper" className="ml-4 w-3/5">
        <h1 className="text-4xl mb-4">Pizza Awesomeness</h1>
        <p className="text-justify">{text}</p>
      </div>
    </div>
  );
}
