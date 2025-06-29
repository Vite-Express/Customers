import { accountTypes } from "@/constants/data";
import { MainLayout } from "@/layouts";
import clsx from "clsx";
import { ArrowRight, Circle, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const AccountType = () => {
  const [selectedUrl, setSelectedUrl] = useState("");

  const onSubmit = () => {
    if (selectedUrl) {
      window.open(selectedUrl, "_blank");
    }
  };

  return (
    <MainLayout>
      <div className="layout">
        <div className="space-y-4 text-center pb-8 border-b border-line">
          <p className="text-muted border border-line inline-flex px-3 p-1 rounded-full bg-secondary">
            Select an Account Type 🚀
          </p>
          <h1 className="md:text-4xl text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-orange-500">
            What type of account would you love to create with us?
          </h1>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 mt-4 gap-4">
          {accountTypes.map((x, y) => (
            <div
              key={y}
              onClick={() => setSelectedUrl(x.path)}
              className={clsx(
                "border border-line p-4 rounded-xl flex items-center justify-between gap-4 cursor-pointer transition",
                selectedUrl === x.path ? "border-primary" : "hover:bg-secondary"
              )}
            >
              <div>
                <h3 className="font-semibold">{x.title}</h3>
                <p className="text-muted text-sm">{x.description}</p>
              </div>
              {selectedUrl === x.path ? (
                <CheckCircle2
                  size={20}
                  className="text-primary flex-shrink-0"
                />
              ) : (
                <Circle size={20} className="text-muted flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        <button
          onClick={onSubmit}
          disabled={!selectedUrl}
          className={clsx(
            "btn-primary h-12 font-medium mx-auto mt-6 rounded-full md:w-[480px] w-full transition-opacity",
            !selectedUrl && "opacity-50 cursor-not-allowed"
          )}
        >
          Continue <ArrowRight size={20} />
        </button>
      </div>
    </MainLayout>
  );
};

export default AccountType;
