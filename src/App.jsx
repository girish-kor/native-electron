import { useEffect, useState } from "react";
import { View, Text, Button } from "./components";
import { usePlatformAdapter } from "./hooks/usePlatformAdapter";
import { cn } from "./utils/cn";

const COUNT_KEY = "app.count";

export default function App() {
  const platform = usePlatformAdapter();
  const [count, setCount] = useState(0);

  useEffect(() => {
    let mounted = true;
    platform.getItem(COUNT_KEY).then((stored) => {
      if (mounted && stored) setCount(Number(stored));
    });
    return () => {
      mounted = false;
    };
  }, [platform]);

  const increment = () => {
    const next = count + 1;
    setCount(next);
    platform.setItem(COUNT_KEY, String(next));
  };

  return (
    <View className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-900 text-white">
      <Text className="text-2xl font-bold text-white">
        Vite + Electron + Native
      </Text>
      <Text className={cn("text-sm text-slate-400")}>
        Running on: {platform.name}
      </Text>
      <Text className="text-4xl font-monospace text-yellow-500">{count}</Text>
      <Button
        onPress={increment}
        className="rounded bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-500"
      >
        Increment
      </Button>
    </View>
  );
}
