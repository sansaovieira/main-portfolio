interface SectionHeaderProps {
    title: string;
    subtitle: string;
}
const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
  <div className="font-bold uppercase">
    <h1 className="text-[#f84e54] text-2xl my-4">{title}</h1>
    <h1 className="text-white text-2xl font-bold">{subtitle}</h1>
  </div>
);

}

export default SectionHeader
