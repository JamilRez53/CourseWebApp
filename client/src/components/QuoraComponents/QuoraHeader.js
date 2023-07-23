// import React, { useState } from "react";
// import HomeIcon from "@mui/icons-material/Home";
// import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
// import {
//   AssignmentTurnedInOutlined,
//   // Close,
//   NotificationsOutlined,
//   PeopleAltOutlined,
//   Search,
//   ExpandMore,
// } from "@material-ui/icons";
// import CloseIcon from '@mui/icons-material/Close';
// import { Avatar, Button, Input } from "@mui/material-core";
// import "./css/QuoraHeader.css";
// import { Modal } from "react-responsive-modal";
// import "react-responsive-modal/styles.css";
// import axios from "axios";
// // import { auth } from "../firebase";
// // import { signOut } from "firebase/auth";
// // import { logout, selectUser } from "../feature/userSlice";
// // import { useDispatch, useSelector } from "react-redux";
// const QuoraHeader = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const Close = <CloseIcon />;
//   return (
//     <div className="qHeader">
//     <div className="qHeader-content">
//       <div className="qHeader__logo">
//         <img
//           src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
//           alt="logo"
//         />
//       </div>
//       <div className="qHeader__icons">
//         <div className="qHeader__icon">
//           <HomeIcon />
//         </div>
//         <div className="qHeader__icon">
//           <FeaturedPlayListOutlinedIcon />
//         </div>
//         <div className="qHeader__icon">
//           <AssignmentTurnedInOutlined />
//         </div>
//         <div className="qHeader__icon">
//           <PeopleAltOutlined />
//         </div>
//         <div className="qHeader__icon">
//           <NotificationsOutlined />
//         </div>
//       </div>
//       <div className="qHeader__input">
//         <Search />
//         <input type="text" placeholder="Search questions" />
//       </div>
//       <div className="qHeader__Rem">
//          {/* onClick={handleLogout} */}
//         <span >
//         {/* src={user?.photo} */}
//           <Avatar  />
//         </span>

//         <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
//         <Modal
//           open={isModalOpen}
//           closeIcon={Close}
//           onClose={() => setIsModalOpen(false)}
//           closeOnEsc
//           center
//           closeOnOverlayClick={false}
//           styles={{
//             overlay: {
//               height: "auto",
//             },
//           }}
//         >
//           <div className="modal__title">
//             <h5>Add Question</h5>
//             <h5>Share Link</h5>
//           </div>
//           <div className="modal__info">
//           {/* src={user?.photo} */}
//             <Avatar  className="avatar" />
//             <div className="modal__scope">
//               <PeopleAltOutlined />
//               <p>Public</p>
//               <ExpandMore />
//             </div>
//           </div>
//           <div className="modal__Field">
//             <Input
//               // value={question}
//               // onChange={(e) => setQuestion(e.target.value)}
//               type=" text"
//               placeholder="Start your question with 'What', 'How', 'Why', etc. "
//             />
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               <input
//                 type="text"
//                 //value={inputUrl}
//                 // onChange={(e) => setInputUrl(e.target.value)}
//                 style={{
//                   margin: "5px 0",
//                   border: "1px solid lightgray",
//                   padding: "10px",
//                   outline: "2px solid #000",
//                 }}
//                 placeholder="Optional: inclue a link that gives context"
//               />
//               {/* {inputUrl !== "" && (
//                 <img
//                   style={{
//                     height: "40vh",
//                     objectFit: "contain",
//                   }}
//                   src={inputUrl}
//                   alt="displayimage"
//                 />
//               )} */}
//             </div>
//           </div>
//           <div className="modal__buttons">
//             <button className="cancle" onClick={() => setIsModalOpen(false)}>
//               Cancel
//             </button>
//             {/* onClick={handleSubmit} */}
//             <button  type="submit" className="add">
//               Add Question
//             </button>
//           </div>
//         </Modal>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default QuoraHeader