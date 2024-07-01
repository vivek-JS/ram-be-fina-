import Village from "../models/village.model.js";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const createVillage = async (req, res, next) => {
  req.body.village = capitalizeFirstLetter(req.body.village);
  req.body.taluka = capitalizeFirstLetter(req.body.taluka);
  req.body.district = capitalizeFirstLetter(req.body.district);

  const { village, taluka, district } = req.body;

  // find village
  const villageData = await Village.findOne({
    village,
    taluka,
    district,
  });

  // if village not found
  if (!villageData) {
    await Village.create({
      village,
      taluka,
      district,
    });
  }

  next();
};

const getVillageData = async (req, res, next) => {
  const data = await Village.aggregate([
    {
      $facet: {
        villages: [
          {
            $group: {
              _id: null,
              villages: { $addToSet: "$village" },
            },
          },
          {
            $project: {
              _id: 0,
              villages: "$villages",
            },
          },
        ],
        talukas: [
          {
            $group: {
              _id: null,
              talukas: { $addToSet: "$taluka" },
            },
          },
          {
            $project: {
              _id: 0,
              talukas: "$talukas",
            },
          },
        ],
        districts: [
          {
            $group: {
              _id: null,
              districts: { $addToSet: "$district" },
            },
          },
          {
            $project: {
              _id: 0,
              districts: "$districts",
            },
          },
        ],
      },
    },
    {
      $project: {
        villages: { $arrayElemAt: ["$villages.villages", 0] },
        talukas: { $arrayElemAt: ["$talukas.talukas", 0] },
        districts: { $arrayElemAt: ["$districts.districts", 0] },
      },
    },
  ]);

  res.send(data);
};

export { createVillage, getVillageData };
