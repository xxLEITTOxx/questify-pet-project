import React from "react";
import { GoTrophy } from "react-icons/go";
import { RiLogoutCircleRLine } from "react-icons/ri";
import css from "./Header.module.css";

interface HeaderProps {
    userName: string;
}

export default function Header({ userName }: HeaderProps) {
    const userInitial = userName ? userName.charAt(0).toUpperCase() : "";

    return (
        <header className={css.headerContainer}>
            <div className={css.logo}>Questify</div>
            <div className={css.userInfo}>
                <div className={css.userAvatar}>{userInitial}</div>
                <div className={css.userName}>{userName}'s Quest Log</div>
            </div>
            <div className={css.actions}>
                <button className={css.actionButton}>
                    <div className={css.trophyButtonWrapper}>
                        {" "}
                        {/* Обертка для иконки Challenge */}
                        <GoTrophy className={css.trophyIcon} />
                    </div>
                </button>
                <button className={css.actionButton}>
                    <RiLogoutCircleRLine className={css.logoutIcon} />
                </button>
            </div>
        </header>
    );
}
