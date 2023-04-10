import { create } from 'zustand';
import produce from 'immer';

type Advice = {
  slip: {
    advice: string;
    id: number;
  };
};

type AdviceStore = {
  advices: Advice[];
  addAdvice: (advice: Advice) => void;
  removeAdvice: (id: number) => void;
};

export const useAdviceStore = create<AdviceStore>((set) => ({
  advices: [],
  addAdvice: (advice: Advice) =>
    set(
      produce((draft) => {
        const exists = draft.advices.some(
          (draftAdvice: Advice) => draftAdvice.slip.id === advice.slip.id
        );
        if (!exists) {
          draft.advices.push(advice);
        }
      })
    ),
  removeAdvice: (id: number) =>
    set((state) => ({
      advices: state.advices.filter((advice) => advice.slip.id !== id),
    })),
}));
