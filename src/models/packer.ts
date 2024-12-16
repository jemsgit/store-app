export type PackerResponseDTO = {
  packers: Packer[];
  record: {
    bestPacker: Packer;
    yearCount: number;
    yearWeight: number;
  };
};

export type Packer = {
  id: string;
  name: string;
  packsCount: number;
  perValue: number;
};
