import ColorField from "../../ui/ColorField";
import NumberField from "../../ui/NumberField";
import StringField from "../../ui/StringField";

type NotEmptyType = string | number | object;
const horzCoords = ["x", "w"] as const;
const vertCoords = ["y", "h"] as const;
const getUnit = (key: string) => {
  if (horzCoords.includes(key as (typeof horzCoords)[number])) {
    return <span className="flex-none">/10</span>;
  } else if (vertCoords.includes(key as (typeof vertCoords)[number])) {
    return <span className="flex-none">/5.63</span>;
  } else return null;
};
export const ObjectOptions = ({
  groupName,
  obj,
  refreshLayers,
}: {
  groupName: string;
  obj: Record<string, NotEmptyType>;
  refreshLayers: () => void;
}) => {
  const render = (obj: Record<string, NotEmptyType>, key: string) => {
    if (typeof obj[key] === "number") {
      return (
        <NumberField
          label={key}
          value={obj[key] as number}
          onChange={(num) => {
            obj[key] = num;
            refreshLayers();
          }}
          unit={getUnit(key)}
        />
      );
    } else if (typeof obj[key] === "string") {
      if (key === "color") {
        return (
          <ColorField
            label={key}
            value={obj[key] as unknown as string}
            onChange={(text) => {
              obj[key] = text;
              refreshLayers();
            }}
          />
        );
      } else {
        return (
          <StringField
            label={key}
            value={obj[key] as unknown as string}
            onChange={(text) => {
              obj[key] = text;
              refreshLayers();
            }}
          />
        );
      }
    } else if (typeof obj[key] === "object") {
      return (
        <ObjectOptions
          groupName={key}
          obj={obj[key] as Record<string, NotEmptyType>}
          refreshLayers={refreshLayers}
        />
      );
    }
  };
  return (
    <div className={groupName && "pl-2 flex flex-col gap-1"}>
      {groupName && (
        <h3 className="bg-slate-800 text-slate-200 px-2">{groupName}</h3>
      )}
      <ul className="flex flex-col gap-1">
        {Object.keys(obj).map((key) => {
          return <li key={key}>{render(obj, key)}</li>;
        })}
      </ul>
    </div>
  );
};
