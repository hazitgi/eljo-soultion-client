import React from "react";
import "./task.css";
import MetalFabrication from "../qc/QcModule/departments/MetalFabrication";
import LetterMoulding from "../qc/QcModule/departments/LetterMoulding";
import Sanding from "../qc/QcModule/departments/Sanding";
import Painting from "../qc/QcModule/departments/Painting";
import VinylGraphics from "../qc/QcModule/departments/VinylGraphics";
import Acrylic from "../qc/QcModule/departments/Acrylic";
import Polishing from "../qc/QcModule/departments/Polishing";
import OutsourcedMaterials from "../qc/QcModule/departments/OutsourcedMaterials";
import Electricals from "../qc/QcModule/departments/Electricals";
import Packaging from "../qc/QcModule/departments/Packaging";
import "../qc/QcModule/QcModule.css";
import CncLaserCutting from "../qc/QcModule/departments/CncLaserCutting";

const Task = () => {
  return (
    <>
      <div className="page_container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page_title">Qc Module</div>
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
              <div className="letter_moulding_box">
                <LetterMoulding />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
              <div className="letter_moulding_box">
                <MetalFabrication />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
              <div className="letter_moulding_box">
                <CncLaserCutting />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
              <div className="letter_moulding_box">
                <Sanding />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
              <div className="letter_moulding_box">
                <Painting />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
              <div className="letter_moulding_box">
                <VinylGraphics />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
              <div className="letter_moulding_box">
                <Acrylic />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
              <div className="letter_moulding_box">
                <Electricals />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
              <div className="letter_moulding_box">
                <Polishing />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
              <div className="letter_moulding_box">
                <Packaging />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
              <div className="letter_moulding_box">
                <OutsourcedMaterials />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
