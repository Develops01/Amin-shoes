import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../store/entities/user";
import { setCurrentModal } from "../store/entities/modal";
import { logout } from './../store/entities/user';

import profilePic from "../img/profile.svg";
import shopPic from "../img/shop.svg";
import shoePic from "../img/shoes.png";
import exitPic from "../img/exit.png";

function TopHeader() {
  const dispatch = useDispatch();
  const user = useSelector((state) => selectCurrentUser(state));

  return (
    <Fragment>
      <div className="py-4 px-5 flex gap-4">
        <div className="flex items-center text-xs cursor-pointer">
          <img src={profilePic} alt="" className="ml-2 w-4 h-[19px]" />
          {user.token ? (
            <span>پنل کاربری</span>
          ) : (
            <Fragment>
              <span
                onClick={() => dispatch(setCurrentModal("LOGIN"))}
                className="mx-1"
              >
                ورود
              </span>
              <span
                onClick={() => dispatch(setCurrentModal("SIGNUP"))}
                className="mx-1"
              >
                ثبت نام
              </span>
            </Fragment>
          )}
        </div>

        <div className="flex items-center text-xs cursor-pointer">
          <img src={shopPic} alt="" className="ml-2 w-4 h-[19px]" />
          <span onClick={()=>dispatch(setCurrentModal("SHOP_CART"))}>سبد خرید</span>
        </div>

        {user.token && (
          <div className="flex items-center text-xs cursor-pointer">
            <img src={exitPic} alt="" className="ml-2 w-4 h-[19px]" />
            <span onClick={()=>dispatch(logout())}>خروج</span>
          </div>
        )}

        <div className="flex items-center text-xs mr-auto sm:hidden">
          <img src={shoePic} alt="" className="ml-2 h-[19px]" />
        </div>
      </div>
    </Fragment>
  );
}

export default TopHeader;
