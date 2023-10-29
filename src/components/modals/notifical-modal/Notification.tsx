import React, { useState } from "react";
import styles from "./Notification.module.scss";
import { H4, P } from "@/components/shared/headings/Heading";
import Empty from "@/assets/images/empty-notification.png";
import Close from "@/assets/icons/close.svg";
import Image from "next/image";
import Notify from "@/assets/images/notification-image.png";
import NotificationMessage from "@/components/notification-message/NotificationMessage";
import Profile from "@/assets/images/profile.png";

const Notification = () => {
  const [modal, setModal] = useState(true);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <div className={modal ? `flex flex-col` : `hidden`}>
      <div className={styles.modalContainer}></div>

      <div className={styles.notificationContainer}>
        <Close className={styles.closeIcon} onClick={handleModal} />

        <div>
          <div className="flex items-center gap-4 mb-5">
            <Image src={Notify} alt="notifiy" className="lg:hidden" />

            <H4 className="text-[#3E3838] font-bold">Notification</H4>
          </div>

          <div className="overflow-y-scroll h-[500px] lg:h-screen">
            <NotificationMessage
              title="Welcome to Phonecom"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
              date="26th September 2023"
              time=" 1:00pm"
              image={Profile}
            />

            <NotificationMessage
              title="Welcome to Phonecom"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
              date="26th September 2023"
              time=" 1:00pm"
              image={Profile}
            />

            <NotificationMessage
              title="Welcome to Phonecom"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
              date="26th September 2023"
              time=" 1:00pm"
              image={Profile}
            />

            <NotificationMessage
              title="Welcome to Phonecom"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
              date="26th September 2023"
              time=" 1:00pm"
              image={Profile}
            />

            <NotificationMessage
              title="Welcome to Phonecom"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
              date="26th September 2023"
              time=" 1:00pm"
            />

            <NotificationMessage
              title="Welcome to Phonecom"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
              date="26th September 2023"
              time=" 1:00pm"
            />

            <NotificationMessage
              title="Welcome to Phonecom"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
              date="26th September 2023"
              time=" 1:00pm"
            />
          </div>

          {/* <div className=' flex flex-col items-center gap-9 mt-20'>
                        <Image src={Empty} alt='bell'/>
                        <P className='text-[#475367] text-center max-w-[252px] md:max-w-sm'>
                            You have’nt made any transaction yet. Your wallet Payments would appear here when you
                        </P>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Notification;
