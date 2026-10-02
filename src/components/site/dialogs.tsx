import { useState, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Check, Copy, X } from "lucide-react";
import { factSheet, games, studio } from "@/data/studio";

async function copyText(value: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    const area = document.createElement("textarea");
    area.value = value;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  }
}

function Shell({
  title,
  description,
  children,
  trigger,
}: {
  title: string;
  description: string;
  children: ReactNode;
  trigger: ReactNode;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <div className="dialog-head">
            <Dialog.Title className="dialog-title">{title}</Dialog.Title>
            <Dialog.Close className="icon-btn" aria-label="Close">
              <X className="size-4" />
            </Dialog.Close>
          </div>
          <Dialog.Description className="dialog-desc">{description}</Dialog.Description>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => {
        void copyText(value).then((ok) => {
          if (!ok) return;
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1600);
        });
      }}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      {copied ? "Copied" : label}
    </button>
  );
}

export function DiscordDialog({ trigger }: { trigger: ReactNode }) {
  return (
    <Shell
      title="No public channel yet"
      description="The studio doesn’t have a Discord invite. The work is on GitHub."
      trigger={trigger}
    >
      <p className="invite">{studio.githubLabel}</p>
      <div className="dialog-actions">
        <CopyButton value={studio.links.github} label="Copy GitHub" />
      </div>
    </Shell>
  );
}

export function PressDialog({ trigger }: { trigger: ReactNode }) {
  const boilerplate =
    "Pyrolysis Game Labs is an independent studio run by Anthony Hinojosa. Limerality is a first-person environmental mystery in development. Cosmic Conquest is a retro-futurist point-and-click you can play in the browser.";

  const download = () => {
    const blob = new Blob([factSheet()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pyrolysis-game-labs-fact-sheet.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Shell
      title="Press kit"
      description="Boilerplate, the catalog, and a fact sheet you can take with you."
      trigger={trigger}
    >
      <p className="body tight">{boilerplate}</p>
      <ul className="fact-list">
        <li>Anthony Hinojosa · two games</li>
        {games.map((game) => (
          <li key={game.id}>
            {game.title} · {game.status} · {game.platforms.join(", ")}
          </li>
        ))}
      </ul>
      <div className="dialog-actions">
        <CopyButton value={boilerplate} label="Copy boilerplate" />
        <button type="button" className="btn btn-primary" onClick={download}>
          Download fact sheet
        </button>
      </div>
    </Shell>
  );
}
