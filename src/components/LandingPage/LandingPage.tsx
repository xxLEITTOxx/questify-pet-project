import React, { useLayoutEffect, useRef, useState } from "react";
import css from "./LandingPage.module.css";
import toast from "react-hot-toast";
import { authService } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import PromoQuestCards from "../PromoQuestCards/PromoQuestCards";

export default function LandingPage() {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // NEW: refs для вычислений
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // NEW: css-переменные для позиционирования PromoQuestCards
    const [promoVars, setPromoVars] = useState<{ top: number; right: number }>({
        top: 0,
        right: 0,
    });

    useLayoutEffect(() => {
        const update = () => {
            const w = wrapperRef.current;
            const c = contentRef.current;
            if (!w || !c) return;
            const wr = w.getBoundingClientRect();
            const cr = c.getBoundingClientRect();

            // Выравниваем верх Promo с верхом landingContent
            const top = cr.top - wr.top;

            // Отступ справа: от правого края landingContent + 60px до правого края wrapper
            const right = Math.max(0, wr.right - cr.right - 60);

            setPromoVars({ top, right });
        };

        update();

        const ro = new ResizeObserver(update);
        if (wrapperRef.current) ro.observe(wrapperRef.current);
        if (contentRef.current) ro.observe(contentRef.current);
        window.addEventListener("resize", update);

        // Когда загрузятся шрифты — метрики могут измениться
        if ((document as any).fonts?.ready) {
            (document as any).fonts.ready.then(update).catch(() => {});
        }

        return () => {
            ro.disconnect();
            window.removeEventListener("resize", update);
        };
    }, []);

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            toast.error(
                "Неправильный формат почты. Пожалуйста, повторите ввод."
            );
            return false;
        }

        if (password.length < 8) {
            toast.error(
                "Пароль должен быть не меньше 8 символов. Пожалуйста, повторите ввод."
            );
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            // Попытка авторизации
            const loginResponse = await authService.login({ email, password });
            login(loginResponse.data);
            toast.success("Авторизация прошла успешно!");
        } catch (loginError) {
            console.error("Login failed, attempting to register:", loginError);
            try {
                // Если авторизация не удалась, попытка регистрации
                await authService.register({ email, password });
                toast.success("Вы зарегистрировались, спасибо за регистрацию.");
                // Автоматически авторизуем после успешной регистрации
                const newLoginResponse = await authService.login({
                    email,
                    password,
                });
                login(newLoginResponse.data);
            } catch (registerError) {
                // Если и регистрация не удалась
                console.error("Registration failed:", registerError);
                toast.error("Ошибка! Проверьте введенные данные.");
            }
        }
    };

    return (
        <div
            className={css.landingWrapper}
            ref={wrapperRef}
            style={
                {
                    // пробрасываем переменные для PromoQuestCards
                    ["--promo-top" as any]: `${promoVars.top}px`,
                    ["--promo-right" as any]: `${promoVars.right}px`,
                } as React.CSSProperties
            }
        >
            {/* Полотно под контентом, но внутри рамки с марджинами */}
            <PromoQuestCards />

            <div className={css.landingPageContainer}>
                <div className={css.landingContent} ref={contentRef}>
                    <h1 className={css.landingH1}>Questify</h1>
                    <h2 className={css.landingH2}>
                        Questify will turn your life into a thrilling game full
                        of amazing quests and exciting challenges.
                    </h2>
                    <div className={css.authSection}>
                        <p>Choose your name to sign up or log in</p>
                        <form
                            onSubmit={handleSubmit}
                            className={css.inputGroup}
                        >
                            <div className={css.inputWrapper}>
                                <input
                                    type="email"
                                    className={css.usernameInput}
                                    placeholder="Your email..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    className={css.usernameInput}
                                    placeholder="Your password..."
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <button type="submit" className={css.goButton}>
                                go!
                            </button>
                        </form>
                    </div>
                </div>
                <div className={css.bgStack}>
                    <div className={css.backgroundShapeGray} />
                    <div className={css.backgroundShapeBlue} />
                </div>
            </div>
        </div>
    );
}
