const Page = () => {
  return (
    <div style={{ marginTop: '2em' }}>
      <div className="jumbotron text-center">
        <h1>Signify - ASL Translator</h1>
        <h4>
          A project by Arjun Rane, Supriya Khadka, and Om Patil<br/>
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
          <img
            src="opencv.png"
            alt="Hand Landmark Detection"
            className="img-responsive col-xs-12 col-md-6"
            style={{ height: '100%' }}
          />
          <div className="col-xs-12 col-md-6">
            <p>
              The first step in our translation process uses MediaPipe's Hand Landmark
              Detection to accurately identify key points on the hand. This system works by:
              <br />
              <code>
                const hands = new Hands({'{'}locateFile: (file) => {'{'}
                <br />
                  return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${'${file}'}`;
                <br />
                {'}'}{'})'};
                <br />
                hands.setOptions({'{'}
                <br />
                  maxNumHands: 2,
                <br />
                  modelComplexity: 1,
                <br />
                  minDetectionConfidence: 0.5,
                <br />
                  minTrackingConfidence: 0.5
                <br />
                {'}'});
              </code>
              <br />
              This landmark detection identifies 21 different points on each hand, 
              providing precise spatial coordinates that are essential for recognizing 
              different sign language gestures.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-secondary jumbotron">
        <h3 className="text-center">2. Gesture Classification</h3>
        <div className="row justify-content-center">
          <img
            src="model-architecture.png"
            alt="Gesture Classification Model"
            className="img-responsive col-xs-12 col-md-6"
            style={{ height: '100%' }}
          />
          <div className="col-xs-12 col-md-6">
            <p>
              After experimenting with different approaches, we developed a custom 
              classification model that processes the landmark data from MediaPipe. 
              Our model takes the normalized coordinates of hand landmarks and uses 
              a lightweight neural network to classify them into ASL letters. This approach 
              provides both real-time performance and high accuracy, as the pre-processing 
              by MediaPipe significantly simplifies the classification task.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-secondary jumbotron">
        <h3 className="text-center">3. Temporal Filtering</h3>
        <div className="row justify-content-center">
          <img
            src="interpretation.png"
            alt="Temporal Filtering"
            className="img-responsive col-xs-12 col-md-6"
            style={{ height: '100%' }}
          />
          <div className="col-xs-12 col-md-6">
            <p>
              Our system employs temporal filtering to convert the stream of letter 
              predictions into coherent text. The algorithm works by checking if the 
              current detected letter differs from the previous one, and if the previous 
              letter has appeared consistently for a threshold number of frames. Different 
              letters have different thresholds based on their detection reliability – 
              higher thresholds for commonly confused letters and lower thresholds for 
              more distinctive signs. When a space gesture is detected, the system finalizes 
              the current word and proceeds to the next processing steps.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-secondary jumbotron">
        <h3 className="text-center">4. Text Correction and Speech Synthesis</h3>
        <div className="row justify-content-center">
          <img
            src="tts.jpeg"
            alt="Text Correction and Speech"
            className="img-responsive col-xs-12 col-md-6"
            style={{ height: '100%' }}
          />
          <div className="col-xs-12 col-md-6">
            <p>
              To improve accuracy, we implemented a text correction system that compares 
              detected words against an English dictionary. This helps resolve minor 
              detection errors by suggesting the closest matching word. Additionally, 
              we integrated the Web Speech API to convert the corrected text into spoken 
              words, making the translation accessible to a wider audience and enabling 
              more natural communication between sign language users and non-signers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;