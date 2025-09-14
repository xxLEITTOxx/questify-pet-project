import { useState, useRef, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { cardService } from "../services/cardService";
import type { CardData } from "../types/card";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import QuestCardModalDelete from "../QuestCardModalDelete/QuestCardModalDelete";
import css from "./QuestCardCompleted.module.css";
import { MdArrowForward } from "react-icons/md";
import vectorLogo from "../../assets/award.svg";

interface QuestCardCompletedProps {
    cardData: CardData;
}

export default function QuestCardCompleted({
    cardData,
}: QuestCardCompletedProps) {
    const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const queryClient = useQueryClient();

    useOnClickOutside(cardRef, () => setIsConfirmingDelete(false));

    // --- ДОБАВЛЕННЫЙ БЛОК ДЛЯ ОТСЛЕЖИВАНИЯ ESC ---
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsConfirmingDelete(false);
            }
        };

        // Добавляем слушатель, только если модальное окно открыто
        if (isConfirmingDelete) {
            document.addEventListener("keydown", handleKeyDown);
        }

        // Убираем слушатель при закрытии окна или размонтировании компонента
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isConfirmingDelete]); // Эффект зависит от состояния модального окна

    const deleteMutation = useMutation({
        mutationFn: (cardId: string) => cardService.deleteCard(cardId),
        onSuccess: () => {
            toast.success("Completed quest removed!");
            queryClient.invalidateQueries({ queryKey: ["cards"] });
        },
        onError: (error: any) => {
            toast.error(
                error.response?.data?.message || "Failed to remove quest"
            );
        },
    });

    const handleDeleteConfirm = () => {
        deleteMutation.mutate(cardData._id);
        setIsConfirmingDelete(false);
    };

    return (
        <div
            ref={cardRef}
            className={css.completedContainer}
            onClick={() => setIsConfirmingDelete(true)}
        >
            {isConfirmingDelete && (
                <QuestCardModalDelete
                    onConfirm={handleDeleteConfirm}
                    onCancel={() => setIsConfirmingDelete(false)}
                />
            )}

            <div className={css.completedTitle}>
                <div className={css.completedName}>Completed:</div>
                <div className={css.completedQuestName}>{cardData.title}</div>
            </div>
            <div className={css.completedImage}>
                <img src={vectorLogo} alt="award" width="144" height="124" />
            </div>
            <div className={css.completedContinue}>
                <div className={css.continueText}>Continue</div>
                <MdArrowForward color="#00d7ff" />
            </div>
        </div>
    );
}
