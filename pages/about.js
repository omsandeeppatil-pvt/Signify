const Page = () => {
  return (
    <div style={{ marginTop: '2em' }}>
      <div className="jumbotron text-center">
        <h1>Signify - ASL Translator</h1>
        <h4>
          A project by Arjun Rane, Supriya Khadka, and Om Patil<br />
          Guided by Prof. Pooja Kulkarni
        </h4>
        <h4>
          Signify leverages MediaPipe technology to convert webcam input into readable
          sign language text. The sections below outline the key processes that enable
          Signify to translate hand gestures into written words.
        </h4>
      </div>
      
      <div className="bg-secondary jumbotron">
        <h3 className="text-center">1. Hand Landmark Detection</h3>
        <div className="row justify-content-center">
          <img src="opencv.png" alt="Hand Landmark Detection" className="img-responsive col-xs-12 col-md-6" style={{ height: '100%' }} />
          <div className="col-xs-12 col-md-6">
            <p>
              The first step in our translation process uses MediaPipe's Hand Landmark
              Detection to accurately identify key points on the hand. This system works by:
            </p>
            <pre>
              <code>
                {`const hands = new Hands({
  locateFile: (file) => \`https://cdn.jsdelivr.net/npm/@mediapipe/hands/\${file}\`
});

hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});`}
              </code>
            </pre>
            <p>
              This landmark detection identifies 21 different points on each hand,
              providing precise spatial coordinates essential for recognizing
              different sign language gestures.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-secondary jumbotron">
        <h3 className="text-center">2. Gesture Classification</h3>
        <div className="row justify-content-center">
          <img src="model-architecture.png" alt="Gesture Classification Model" className="img-responsive col-xs-12 col-md-6" style={{ height: '100%' }} />
          <div className="col-xs-12 col-md-6">
            <p>
              After experimenting with different approaches, we developed a custom
              classification model that processes the landmark data from MediaPipe.
              Our model takes the normalized coordinates of hand landmarks and uses
              a lightweight neural network to classify them into ASL letters.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-secondary jumbotron">
        <h3 className="text-center">3. Temporal Filtering</h3>
        <div className="row justify-content-center">
          <img src="interpretation.png" alt="Temporal Filtering" className="img-responsive col-xs-12 col-md-6" style={{ height: '100%' }} />
          <div className="col-xs-12 col-md-6">
            <p>
              Our system employs temporal filtering to convert the stream of letter
              predictions into coherent text. The algorithm ensures stability in letter
              detection before forming complete words.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-secondary jumbotron">
        <h3 className="text-center">4. Text Correction and Speech Synthesis</h3>
        <div className="row justify-content-center">
          <img src="tts.jpeg" alt="Text Correction and Speech" className="img-responsive col-xs-12 col-md-6" style={{ height: '100%' }} />
          <div className="col-xs-12 col-md-6">
            <p>
              To improve accuracy, we implemented a text correction system that compares
              detected words against an English dictionary. Additionally, we integrated
              the Web Speech API to convert corrected text into spoken words, making
              translation accessible for non-signers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
