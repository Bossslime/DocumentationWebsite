# Finished Result
You will be able to keep temporary info cached and accessible locally, do keep in mind that this will be wiped when the project is restarted.

```java
import lombok.Getter;
import lombok.Setter;
import org.bukkit.entity.Player;

import java.util.*;

/**
 *
 * These annotations are used to make a get and set method for all
 * instance variables and can only be accessed when an instance of this class is created or called
 *
 */
@Getter @Setter
public class PlayerLocation {

    /**
     *
     * This hashmap stores an instance of this class under a player variable, the way this works is when you set all the values in an
     * instance of this class, all of it can be stored into ram which allows you to access the values later
     *
     */
    private static HashMap<Player, PlayerLocation> cache = new HashMap<>();

    private final Player player;

    private Double playerX;
    private Double playerY;
    private Double playerZ;

    private Double playerYaw;
    private Double playerPitch;

    /**
     *
     * Should only be called initially, if a duplicate is found,
     * hashmaps will replace the one that was there before so make sure you know what you want it to do.
     *
     */
    public PlayerLocation(Player player, Double playerX, Double playerY, Double playerZ, Double playerYaw, Double playerPitch) {
        this.player = player;
        this.playerX = playerX;
        this.playerY = playerY;
        this.playerZ = playerZ;
        this.playerYaw = playerYaw;
        this.playerPitch = playerPitch;
    }






    /**
     *
     * This returns an instance of this class which contains all methods and info that has been cached, make sure the player has already been initialized
     *
     * @param player The player to get the location of
     * @return An instance of PlayerLocation
     */
    public static PlayerLocation getPlayerLocation(Player player) {
        if (!cache.containsKey(player)) return null;
        return cache.get(player);
    }

}
```