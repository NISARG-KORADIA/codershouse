const roomService = require('../services/room-service.js');
const RoomDto = require('../dtos/room-dto.js');

class RoomsController {
  async create(req, res) {
    const { topic, roomType } = req.body;

    if (!topic || !roomType) {
      return res.status(400).json({ message: "all fields are required." })
    }

    const room = await roomService.create({
      topic,
      roomType,
      // here reason you can access req.user is the middleware we are appending user details in request after verifying tokens.
      ownerId: req.user._id,
    });

    return res.json(new RoomDto(room));
  }

  async index(req, res) {
    const rooms = await roomService.getAllRooms(['open']);
    const allRooms = rooms.map((room) => new RoomDto(room));
    return res.json(allRooms);
  }

  async show(req, res) {
    const room = await roomService.getRoom(req.params.roomId);
    return res.json(room);
  }

}

module.exports = new RoomsController();