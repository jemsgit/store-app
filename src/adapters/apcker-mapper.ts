import { Packer, PackerDTO } from "../models/packer";

export const packerMapper = (packers: PackerDTO[]) => {
  return packers as Packer[];
};
