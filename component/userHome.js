import React, { Component, useEffect, useState } from "react";
export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    // <div className="auth-wrapper">
    //   <div className="auth-inner">
    //     <div>
    //       Name<h1>{userData.fname}</h1>
    //       Email <h1>{userData.email}</h1>
    //       <br />
    //       <button onClick={logOut} className="btn btn-primary">
    //         Log Out
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <section id="navbar">
        <div className="nav-left">
            {/* <button className="menu">menu</button> */}
            <h1>logo</h1>
            <ul>
                <li><i className="fa-solid fa-table-cells-large"></i> <p>overview</p></li>
                <li><i className="fa-solid fa-calendar-days"></i> <p>schedule</p></li>
                <li><i className="fa-solid fa-folder-open"></i><p>courses</p></li>
                <li><i className="fa-solid fa-chart-simple"></i><p>statics</p></li>
                <li><i className="fa-solid fa-gear"></i><p>settings</p></li>
            </ul>
            <button  onClick={logOut}><i className="fa-solid fa-right-from-bracket"></i><p className="m-0">logout</p></button>
        </div>
        <div className="nav-center">
            <div className="center-div p-5 ">
                <div>
                    <h1>overview</h1>
                    <small>welcome back username your program is really good</small>
                </div>
                <div className="d-flex gap-2 mt-5">
                    <div className="average">
                        <h3 className="m-0">9.6 average score</h3>
                        <p className="m-0">better then 86% student</p>
                    </div >
                    <div className="product"></div>
                </div>

                <div className="mt-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>featured courses</h2>
                        <a href="vew"> view all</a>
                    </div>
                </div>
            </div>
            <div className="nav-right">
                <div className="profile-img">
                    <img src="https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Best-Quality-Profile-Images-Pic-Download-2023.jpg" alt=""/>
                    <h3 >username</h3>
                    <small className="text-muted">student</small>
                </div>
                <hr/>
                <div className="remainder">
                    <div className="d-flex justify-content-between align-items-center">
                        <strong>remainder</strong><div className="p-1" ><i className="fa-solid fa-bell "></i></div>
                    </div>
                    <div className="d-flex gap-2 flex-column mt-3">
                        <div className="d-flex gap-3">
                            <div className="remainder-icon"><i className="fa-solid fa-book"></i></div>

                            <div className="d-flex flex-column  ">
                                <strong>hoemwork</strong>
                                <small className="text-muted">abcd</small>
                            </div>
                        </div>
                        <div className="d-flex gap-3">
                            <div className="remainder-icon">
                                <div ><i className="fa-solid fa-bag-shopping"></i></div>
                            </div>
                            <div className="d-flex flex-column  ">
                                <strong>workshop</strong>
                                <small className="text-muted">abcd</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  );
}
