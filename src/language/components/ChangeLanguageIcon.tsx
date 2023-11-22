import React from "react";
import { TouchableOpacity, Image } from "react-native";

import { LANGUAGES } from "../constants";
import useLanguage from "../hooks/useLanguage";

type Props = {
  onPress: () => void;
};

const ChangeLanguageIcon: React.FC<Props> = ({ onPress }) => {
  const { currentLanguage } = useLanguage();
  const LanguageIcon = LANGUAGES[currentLanguage]?.icon;

  return LanguageIcon ? (
    <TouchableOpacity onPress={onPress} className="p-4">
      <Image
        source={LanguageIcon}
        className="h-7 w-7 border-[1px] rounded-full"
      />
    </TouchableOpacity>
  ) : null;
};

export default ChangeLanguageIcon;
