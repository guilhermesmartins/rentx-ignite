import fs from 'fs';

export const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename);
    // eslint-disable-next-line no-empty
  } catch {}

  await fs.promises.unlink(filename);
};
