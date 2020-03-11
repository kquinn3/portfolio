import React, { Fragment } from "react";
import InfoCard from "../layouts/InfoCard";
import InfoModal from "../layouts/InfoModal";
import "../../assets/css/Information.css";
import imgAutomation from "../../assets/img/automation_cropped.jpg";
import imgFirmware from "../../assets/img/iot_cropped.jpg";
import imgYield from "../../assets/img/other_cropped.jpg";
import imgPublication from "../../assets/img/publication_cropped.jpg";
import imgProduction from "../../assets/img/manufacturing_cropped.jpg";
import imgPatent from "../../assets/img/patent_cropped.jpg";

const Information = () => {
  const modalAutomation = "modalAutomation";
  const modalIdAutomation = `#${modalAutomation}`;
  const modalFirmware = "modalFirmware";
  const modalIdFirmware = `#${modalFirmware}`;
  const modalYield = "modalYield";
  const modalIdYield = `#${modalYield}`;
  const modalPublication = "modalPublication";
  const modalIdPublication = `#${modalPublication}`;
  const modalProduction = "modalProduction";
  const modalIdProduction = `#${modalProduction}`;
  const modalPatent = "modalPatent";
  const modalIdPatent = `#${modalPatent}`;

  const card1 = (
    <InfoCard
      ID="automation"
      TITLE="Manufacturing Automation"
      IMG={imgAutomation}
      ALT="Factory equipment"
      MODAL={modalIdAutomation}
    ></InfoCard>
  );
  const card2 = (
    <InfoCard
      ID="firmware"
      TITLE="IoT Firmware Development"
      IMG={imgFirmware}
      ALT="parts with Iot devices"
      MODAL={modalIdFirmware}
    ></InfoCard>
  );
  const card3 = (
    <InfoCard
      ID="yield"
      TITLE="Manufacturing Solutions"
      IMG={imgYield}
      MODAL={modalIdYield}
      ALT="computer code on a monitor"
    ></InfoCard>
  );
  const card4 = (
    <InfoCard
      ID="publication"
      TITLE="Technical Publication"
      IMG={imgPublication}
      ALT="Factory equipment"
      MODAL={modalIdPublication}
    ></InfoCard>
  );
  const card5 = (
    <InfoCard
      ID="production"
      TITLE="Manufacturing Testing"
      IMG={imgProduction}
      ALT="Person operating computer in clean room"
      MODAL={modalIdProduction}
    ></InfoCard>
  );
  const card6 = (
    <InfoCard
      ID="patent"
      TITLE="Semiconductor Patents"
      IMG={imgPatent}
      ALT="computer code on a monitor"
      MODAL={modalIdPatent}
    ></InfoCard>
  );

  const bodyAutomation = (
    <Fragment>
      <div className="card my-3">
        <div className="text-center card-title my-3">
          <h4>Project Background</h4>
        </div>
        <div className="just-word mx-2 card-body">
          <p>
            My company needed to incorporate a new testing platform into our
            manufacturing site in a short amount of time. In addition,
            production needed to be quickly trained. I led this project.
          </p>
        </div>
      </div>
      <div className="card my-3">
        <div className="text-center card-title my-3">
          <h4>Project Solution</h4>
        </div>
        <div className="just-word mx-2 card-body">
          <p>
            I evaluated third party software from KLA Tencor. The software was
            developed in Tcl/Tk. I learned enough Tcl/Tk to make the operator
            GUIs. I made these to resemble other test platform GUIs to minimize
            training efforts.
          </p>
          <p className="my-2">
            For the test data results, I developed scripts in Perl to convert
            the data from our format into KLA's format and the vica versa.{" "}
          </p>
          <p className="my-2">
            Finally, I developed a Unix script and a cronjob to push the data
            onto the manufacturing network.
          </p>
        </div>
      </div>
      <div className="card my-3">
        <div className="text-center card-title my-3">
          <h4>Programming Languages</h4>
        </div>
        <div className="just-word card-body mx-2">
          <p>Perl, Tcl/Tk and Unix C-shell scripting</p>
        </div>
      </div>
    </Fragment>
  );

  const bodyFirmware = (
    <Fragment>
      <div className="card my-3">
        <div className="text-center card-title my-3">
          <h4>Project Background</h4>
        </div>
        <div className="just-word mx-2 card-body">
          <p>
            My company was working with another company on an IoT module that
            had a built-in micro processor with an EPROM on it. The EPROM needed
            to be programmed using specific protocols.
          </p>
        </div>
      </div>

      <div className="card my-3">
        <div className="text-center card-title my-3">
          <h4>Project Solution</h4>
        </div>
        <div className="just-word card-body mx-2">
          <p>
            The other company had the necessary commands in{" "}
            <a
              href="https://en.wikipedia.org/wiki/Intel_HEX"
              target="_blank"
              rel="noopener noreferrer"
            >
              Intel Hex file format{" "}
            </a>{" "}
            I developed a Perl script to convert this to a vector based format.
            Next, I developed the{" "}
            <a
              href="https://www.cohu.com/semiconductor-ate-software"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cohu Unison ATE software{" "}
            </a>
            . This is used in the manufacturing of this product.
          </p>
        </div>
      </div>
    </Fragment>
  );

  const bodyYield = (
    <Fragment>
      <div className="card my-3">
        <div className="text-center card-title my-3">
          <h4>Reticle Repeater</h4>
        </div>
        <div className="just-word mx-2 card-body">
          <p>
            A certain type of semiconductor yield limiter is a defect on a
            reticle. I developed a new technique that identifies reticle
            repeaters. I developed a Perl program with MsSQL database.
          </p>
        </div>
      </div>
      <div className="card my-3">
        <div className="text-center card-title my-3">
          <h4>Intel Text Data</h4>
        </div>
        <div className="just-word card-body mx-2">
          <p>
            My company was sampling tested semiconductor wafers but at the last
            moment the customer required the data to be in a specific format. I
            developed a Perl script to format and automate the data for the
            customer.
          </p>
        </div>
      </div>
    </Fragment>
  );

  const bodyPublication = (
    <Fragment>
      <div className="text-center my-3">
        <h4>Co-Wrote Technical Paper</h4>
      </div>
      <div className="just-word mx-2">
        <p className="modal-font my-3">
          Developed a technique with other engineers to accurately predict
          manufacturing yields on future products based on the product's repair
          scheme.
        </p>
      </div>
      <div className="just-word mx-2">
        <p className="modal-font my-3">
          The initial idea was conceived by another engineer. My role was to
          take this project over, implement in the factory, train engineers on
          it and solicit ideas to build upon this fundamental new approach.
        </p>
      </div>
      <div className="just-word mx-2">
        <p className="modal-font my-3">
          The project was very successful and was published in the company's
          Technology Journal.
        </p>
      </div>
    </Fragment>
  );

  const bodyProduction = (
    <Fragment>
      <div className="card my-3">
        <div className="text-center card-title my-3">
          <h4>DRAM production tests in Advantest</h4>
        </div>
        <div className="just-word mx-2 card-body">
          <p>
            Developed high volume DRAM manufacturing test programs for several
            companies. Developed the test code using{" "}
            <a
              href="https://www.advantest.com/memory-test-systems"
              target="_blank"
              rel="noopener noreferrer"
            >
              Advantest Memory Testers
            </a>
          </p>
        </div>
      </div>
      <div className="card my-3">
        <div className="text-center card-title my-3">
          <h4>DRAM repair in C++</h4>
        </div>
        <div className="just-word mx-2 card-body">
          <p>Developed several DRAM laser repair programs using C++</p>
        </div>
      </div>
      <div className="card my-3">
        <div className="text-center card-title my-3">
          <h4>RF Switches in C#</h4>
        </div>
        <div className="just-word card-body mx-2">
          <p>Developed manufacturing RF Switch product test code using C#</p>
        </div>
      </div>
    </Fragment>
  );

  const bodyPatent = (
    <Fragment>
      <div className="card my-3">
        <div className="text-center card-title my-3">
          <h4>Voltage Clamp Circuit</h4>
        </div>
        <div className="just-word mx-2 card-body">
          <p>
            Co-wrote a patent for a DRAM design which solved a power up issue
            called latchup.{" "}
            <a
              href="https://patents.justia.com/patent/5545934"
              target="_blank"
              rel="noopener noreferrer"
            >
              Patent
            </a>
          </p>
        </div>
      </div>
      <div className="card my-3">
        <div className="text-center card-title my-3">
          <h4>
            Verifying Individual Probe Contact Using Shared Tester Channels
          </h4>
        </div>
        <div className="just-word mx-2 card-body">
          <p>
            Co-wrote a patent (application) for DRAM circuitry which would
            facilitate testing the product.{" "}
            <a
              href="https://patents.justia.com/patent/20070200571"
              target="_blank"
              rel="noopener noreferrer"
            >
              Patent
            </a>
          </p>
        </div>
      </div>
      <div className="card my-3">
        <div className="text-center card-title my-3">
          <h4>
            Integrated Circuit That Selectively Outputs Subsets of a Group of
            Data Bits
          </h4>
        </div>
        <div className="just-word card-body mx-2">
          <p>
            Co-wrote a patent (application) for a DRAM design which would
            facilitate testing the product.{" "}
            <a
              href="https://patents.justia.com/patent/20090225610"
              target="_blank"
              rel="noopener noreferrer"
            >
              Patent
            </a>
          </p>
        </div>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <div className="information"></div>
      <div className="container mx-auto">
        <div className="h-10v"></div>
        <div className="text-center my-2">
          <h1>Additional Projects</h1>
        </div>

        <div className="d-flex flex-wrap justify-content-center">
          {card1}
          {card2}
          {card3}
          {card4}
          {card5}
          {card6}
        </div>
      </div>
      <div className="h-10v"></div>
      <InfoModal
        MODAL={modalAutomation}
        TITLE="Manufacturing Automation"
        BODY={bodyAutomation}
      ></InfoModal>
      <InfoModal
        MODAL={modalFirmware}
        TITLE="IoT Firmware Development"
        BODY={bodyFirmware}
      ></InfoModal>
      <InfoModal
        MODAL={modalYield}
        TITLE="Manufacturing Software Solutions"
        BODY={bodyYield}
      ></InfoModal>
      <InfoModal
        MODAL={modalPublication}
        TITLE="Technical Publication"
        BODY={bodyPublication}
      ></InfoModal>
      <InfoModal
        MODAL={modalProduction}
        TITLE="Production Test Programs"
        BODY={bodyProduction}
      ></InfoModal>
      <InfoModal
        MODAL={modalPatent}
        TITLE="Semiconductor Patents"
        BODY={bodyPatent}
      ></InfoModal>
    </Fragment>
  );
};

export default Information;
