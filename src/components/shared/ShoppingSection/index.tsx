import SectionHeadline from './SectionHeadline';

type Props = {
  title: string;
  seeAllFn: () => void;
};

function ShoppingSection({title, seeAllFn}: Props) {
  return <SectionHeadline title={title} seeAllFn={seeAllFn} />;
}

export default ShoppingSection;
