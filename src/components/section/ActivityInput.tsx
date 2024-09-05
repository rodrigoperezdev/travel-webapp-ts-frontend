import { ChangeEvent } from "react";
import { useForm } from "../../hooks/useForm";
import { ActivityIcon } from "../graphics/ActivityIcon";

interface ActivityInputProps {
  activity: string;
  setActivity: (value: string) => void;
}

export const ActivityInput: React.FC<ActivityInputProps> = ({
  setActivity,
}) => {
  const { onInputChange, activity } = useForm({ activity: "" });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInputChange(e);
    setActivity(activity);
  };

  return (
    <div className="search-form__activity">
      <div>
        <h3 className="search-form__title">Activity</h3>
      </div>
      <div>
        <div className="search-form__input-container">
          <input
            className="search-form__input"
            type="text"
            placeholder="Bungee Jump"
            name="activity"
            onChange={handleInputChange}
            value={activity}
          />
          <ActivityIcon />
        </div>
      </div>
    </div>
  );
};
