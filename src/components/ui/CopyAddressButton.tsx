import CopyButton from "@/components/ui/CopyButton";

type CopyAddressButtonProps = {
  address: string;
};

export default function CopyAddressButton({ address }: CopyAddressButtonProps) {
  return (
    <CopyButton
      value={address}
      label="Copy Address"
      copiedLabel="Copied!"
      errorLabel="Copy Failed"
      className="w-full sm:w-auto"
    />
  );
}
