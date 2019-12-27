import React, { useState, useEffect } from "react";
import { ProgressBar, Card } from "react-bootstrap";
import Dropzone from "react-dropzone";
import uploadPhoto from "../../Assets/Images/upload-1118929_640.png";
import { toast } from "react-toastify";

const Upload = ({ history }) => {
  const size = useWindowSize();

  const [state, setState] = useState({
    numberOfUpload: 0,
    numberOfBalance: 15,
    done: false
  });

  const uploadCV = e => {
    setState({
      numberOfUpload: 0,
      numberOfBalance: 15,
      done: false
    });

    if (e.length <= 15) {
      setState(prevState => ({
        numberOfUpload: e.length,
        numberOfBalance: prevState.numberOfBalance - e.length,
        done: true
      }));
    } else {
      toast.error("Maximum 15 resumes");
    }
  };

  return (
    <div className="upload-container">
      <div className="top-content">
        <div className="top-text1">Upload Resumes</div>
        <div className="top-text2">
          is simply dummy text of the printing and typesetting industry.
        </div>
      </div>
      <div className="upload-pdf-container">
        <Card>
          <Dropzone multiple onDrop={acceptedFiles => uploadCV(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <div className="drop-content">
                <section {...getRootProps()} className="form-upload">
                  <div className="form-content">
                    <input
                      {...getInputProps()}
                      // accept="application/pdf,application/vnd.ms-excel"
                    />
                    <img
                      alt="Test"
                      src={uploadPhoto}
                      width={100}
                      height={100}
                    />
                    <p className="p-upload">
                      Drop files here or click to upload
                    </p>
                  </div>
                </section>
              </div>
            )}
          </Dropzone>
          <div className="upload-pdf-bottom">
            <div className="bottom-text">
              Note: You can upload maximum 15 resumes
            </div>
            <input
              // accept="application/pdf,application/vnd.ms-excel"
              multiple
              type="file"
              id="file"
              style={{ display: " none" }}
              onChange={e => uploadCV(e.target.files)}
            />
            <div
              className="button"
              onClick={() => {
                document.getElementById("file").click();
              }}
            >
              Upload CV
            </div>
          </div>
        </Card>
      </div>
      <div className="progress-container">
        <div className="progress-content">
          <div
            style={
              size.width < 630
                ? {}
                : {
                    width: `${Math.round(
                      (parseInt(state.numberOfBalance, 10) / 15) * 100
                    ) + 20}%`,
                    textAlign: "center"
                  }
            }
            className="progress-text"
          >
            {Math.round((parseInt(state.numberOfBalance, 10) / 15) * 100)}{" "}
            Resumes Balance
          </div>
          <div
            style={
              size.width < 630
                ? {
                    width: "100%"
                  }
                : {
                    width: `${Math.round((state.numberOfUpload / 15) * 100) +
                      20}%`
                  }
            }
            className="progress-text"
          >
            {Math.round((state.numberOfUpload / 15) * 100)} Resumes Uploaded
          </div>
        </div>
        <ProgressBar>
          <ProgressBar
            className="pg1"
            now={Math.round((parseInt(state.numberOfBalance, 10) / 15) * 100)}
            key={1}
          />
          <ProgressBar
            className="pg2"
            now={Math.round((state.numberOfUpload / 15) * 100)}
            key={2}
          />
        </ProgressBar>

        {state.done && (
          <div className="next-content">
            <div className="button" onClick={() => history.push("show")}>
              Next
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const useWindowSize = () => {
  const isClient = typeof window === "object";

  const getSize = () => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  };

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return windowSize;
};

export default Upload;
